'use strict';

const objs = [
{ id: 1, name: 'Вася' },
{ id: 2, name: 'Петя' },
{ id: 1, name: 'Вася' },
];

const uniqueObjs = Array.from(new Set(objs.map(obj => obj.id)))
                  .map(id => objs.find(obj => obj.id === id));

console.log(uniqueObjs);
