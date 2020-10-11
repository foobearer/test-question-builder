export interface Question {
  questions :[
    description: string,
    type: string,
    answer: string,
    isRequired: boolean,
    choices: [
        choice: [
            isSelected: boolean,
            description: string,
            comments: []
        ],
        others: [
            isChecked: boolean,
            isSelected: boolean
        ]
    ]  
  ]
}


