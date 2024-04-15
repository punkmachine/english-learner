import fs from 'fs/promises';
import { shuffle } from 'lodash-es';

async function readAndMapFiles() {
  try {
    const path = './init-words/part1/';  // Указываем путь к файлам
    const englishWords = await fs.readFile(`${path}english.txt`, 'utf-8');
    const russianWords = await fs.readFile(`${path}russian.txt`, 'utf-8');

    // Разделяем строки и удаляем пустые строки, символы возврата каретки, и приводим слова к нижнему регистру
    const enArray = englishWords.split('\n').map(word => word.trim().replace(/\r$/, '').toLowerCase());
    const ruArray = russianWords.split('\n').map(word => word.trim().replace(/\r$/, '').toLowerCase());

    if (enArray.length !== ruArray.length) {
      throw new Error('Files do not have the same number of words');
    }

    const mappedArray = enArray.map((word, index) => ({
      id: index + 1,
      ru: ruArray[index],
      en: word
    }));

    // Перемешиваем массив перед записью в файл
    const shuffledArray = shuffle(mappedArray);

    // Запись результатов в файл JSON
    await fs.writeFile('./data.json', JSON.stringify(shuffledArray, null, 2), 'utf-8');
    console.log('Data has been saved to data.json');
  } catch (error) {
    console.error('Error reading or processing files:', error);
  }
}

readAndMapFiles();
