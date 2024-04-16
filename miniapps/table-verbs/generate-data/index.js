import fs from 'fs/promises';
import { shuffle } from 'lodash-es';

async function readAndMapFiles() {
  try {
    const path = './init-words/part1/';
    const englishWords = await fs.readFile(`${path}english.txt`, 'utf-8');
    const russianWords = await fs.readFile(`${path}russian.txt`, 'utf-8');

    const enArray = englishWords.split('\n').map(word => word.trim().replace(/\r$/, ''));
    const ruArray = russianWords.split('\n').map(word => word.trim().replace(/\r$/, '').toLowerCase());

    if (enArray.length !== ruArray.length) {
      throw new Error('Files do not have the same number of words');
    }

    const mappedArray = enArray.map((word, index) => {
      const tags = [];
      let enText = word.replace(/\[([^\]]+)\]/g, (match, tag) => {
        tags.push(tag.toLowerCase());
        return '';
      }).trim();

      return {
        id: index + 1,
        ru: ruArray[index],
        en: enText,
        tags: tags,
      };
    });

    const shuffledArray = shuffle(mappedArray);

    // Разбиение массива на чанки и сохранение каждого в отдельный файл
    for (let i = 0; i < shuffledArray.length; i += 100) {
      const chunk = shuffledArray.slice(i, i + 100);
      await fs.writeFile(`./${i/100 + 1}.data.json`, JSON.stringify(chunk, null, 2), 'utf-8');
    }

    console.log('Data has been saved to chunk files');
  } catch (error) {
    console.error('Error reading or processing files:', error);
  }
}

readAndMapFiles();
