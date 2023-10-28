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

// Определение типов
type Chord = string;
type TransposeInterval = number;

// Функция для транспонирования аккордов
function transposeChords(chords: Chord[], interval: TransposeInterval): Chord[] {
  // Определение массива нот
  const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  // Функция для транспонирования одной ноты
  function transposeNote(note: string, interval: number): string {
    const noteIndex = notes.indexOf(note);
    if (noteIndex === -1) {
      // Если нота не найдена, вернуть исходную ноту
      return note;
    }
    const transposedIndex = (noteIndex + interval) % 12;
    return notes[transposedIndex];
  }

  // Функция для транспонирования одного аккорда
  function transposeChord(chord: Chord, interval: TransposeInterval): Chord {
    const rootNote = chord[0]; // Первая буква аккорда - основная нота
    const chordType = chord.slice(1); // Остальная часть аккорда - тип (мажор, минор, и т. д.)
    
    // Транспонируем только основную ноту аккорда
    const transposedRootNote = transposeNote(rootNote, interval);
    
    // Возвращаем транспонированный аккорд
    return transposedRootNote + chordType;
  }

  // Транспонирование всех аккордов в массиве
  const transposedChords = chords.map((chord) => transposeChord(chord, interval));

  return transposedChords;
}

// Пример использования
const originalChords: Chord[] = ['C', 'G', 'Am', 'F'];
const transposedChords = transposeChords(originalChords, 2); // Транспонировать на 2 полутона вверх
console.log(transposedChords); // ['D', 'A', 'Bm', 'G']
