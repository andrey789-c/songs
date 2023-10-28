import TelegramBot from 'node-telegram-bot-api';
import { env } from './IBot.interface.js';
import { sequelize } from './bd.js';

// const token = env.TOKEN;

// sequelize.authenticate()
// sequelize.sync({force: true})

// const bot = new TelegramBot(token, { polling: true });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   if(msg.text)
//     bot.sendMessage(chatId, msg.text)

// });

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Определение типов
type Chord = string;
type TransposeDirection = 'up' | 'down';

// Функция для транспонирования аккордов
function transposeChords(chords: Chord[], interval: number, direction: TransposeDirection): Chord[] {
  // Определение массива нот

  // Функция для транспонирования одной ноты
  function transposeNote(note: string, interval: number, direction: TransposeDirection): string {
    const noteIndex = notes.indexOf(note);
    if (noteIndex === -1) {
      // Если нота не найдена, вернуть исходную ноту
      return note;
    }

    let transposedIndex: number;

    if (direction === 'up') {
      transposedIndex = (noteIndex + interval) % 12;
    } else {
      transposedIndex = (noteIndex - interval + 12) % 12;
    }

    return notes[transposedIndex];
  }

  // Функция для транспонирования одного аккорда
  function transposeChord(chord: Chord, interval: number, direction: TransposeDirection): Chord {
    const rootNote = chord[0]; // Первая буква аккорда - основная нота
    const chordType = chord.slice(1); // Остальная часть аккорда - тип (мажор, минор, и т. д.)

    // Транспонируем только основную ноту аккорда
    const transposedRootNote = transposeNote(rootNote, interval, direction);

    // Возвращаем транспонированный аккорд
    return transposedRootNote + chordType;
  }

  // Транспонирование всех аккордов в массиве
  const transposedChords = chords.map((chord) => transposeChord(chord, interval, direction));

  return transposedChords;
}

// Пример использования
const originalChords: Chord[] = ['C', 'G', 'Am', 'F'];
const transposedChordsUp = transposeChords(originalChords, 2, 'up'); // Транспонировать на 2 полутона вверх
const transposedChordsDown = transposeChords(originalChords, 1, 'down'); // Транспонировать на 1 полутон вниз

// Пример использования

const getChords = (song: string, originalKey: string, toKey: string) => {
  const findChords = song.match(/\{([^}]+)\}/g);

  if (!findChords || !findChords.length) return;

  const newChords = findChords.map((match) => match.substring(1, match.length - 1));

  const indexOriginal = notes.findIndex((key) => originalKey === key);
  const indexEndKey = notes.findIndex((key) => toKey === key);

  // if(indexOriginal < indexEndKey) {

  // } else {
  //   console.log(indexOriginal + indexEndKey)
  // }


};

const songs: string = `Beauty - Bethel Music

1 Verse:  
{Dm}              {Bb}
  Behold the One, the radiance
{C}
  The splendor of every living thing
{Dm}                {Bb}
  You are the Word, You are the Life
{C}
  You are the face of God`;

getChords(songs, 'F', 'D');
