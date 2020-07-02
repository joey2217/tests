interface Question {
  question: string;
  options: string[];
}

const loveConcept: Question[] = [
  {
    question: '你想象中的爱情是',
    options: ['具有令人神往的浪漫色彩','能满足自己的情欲','使人振奋向上','没想过']
  },
  {
    question: '你希望与恋人是这样结识的',
    options: ['在工作和学习中逐渐产生感情','从小青梅竹马','一见钟情','随便']
  }
]

export default loveConcept;