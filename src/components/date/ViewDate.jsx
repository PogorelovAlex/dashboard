import { Typography } from '@material-ui/core';
import * as React from 'react';




export default function ViewDate() {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];
  const month = [
    'Янв',
    'Февр',
    'Март',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Ноя',
    'Дек',
    ];
  const date = new Date();
  const currentDay = date.getDay();
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();
  return (
    <Typography >{`${days[currentDay]},${currentDate} ${month[currentMonth]}`}</Typography>
  );
}