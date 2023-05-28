import React from 'react'

import NumberField from './fields/NumberField'
import TextField from './fields/TextField'
import ChoiceField from './fields/ChoiceField'
import { QuestionProps } from '../types'
import BooleanField from './fields/BooleanField'
import AnyField from './fields/AnyField'
import PercentageField from './fields/PercentageField'

function Question({
  question, onChange,
}: QuestionProps) {
  const renderField = (type: string) => {
    switch (type) {
      // I was confused by the wording of the question for multiple fields, So I provided 2 solutions
      // Solution 1
      // case 'multiple':
      //   return <div className='multiple-field'>
      //     <TextField name={question.id.toString()} onChange={onChange} />
      //     <NumberField name={question.id.toString()} onChange={onChange} />
      //     <BooleanField name={question.id.toString()} onChange={onChange} />
      //   </div>
      // Solution 2 (New component called Anyfield Added to fields directory)
      // case 'multiple':
      //   return <AnyField name={question.id.toString()} onChange={onChange} />
      case 'text':
        return <TextField name={question.id.toString()} onChange={onChange} />
      // case 'percentage':
      //     return <PercentageField name={question.id.toString()} onChange={onChange} />
      case 'number':
        return <NumberField name={question.id.toString()} onChange={onChange} />
      case 'boolean':
        return <BooleanField name={question.id.toString()} onChange={onChange} />
      case 'choice':
        return (
          <ChoiceField
            name={question.id.toString()}
            onChange={onChange}
            choices={question.choices as string[]}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="max-w-3xl">
      <h2 className="mb-10 text-3xl font-bold">{ question.title }</h2>
      { renderField(question.type) }
      { question.description && (
        <>
          <p className="mt-10 text-gray-600">{ question.description }</p>
          <a className="mt-2 block font-medium text-gray-600" href="//atmos.ai" target="_blank" rel="noreferrer">Learn More &rarr;</a>
        </>
      ) }
    </div>
  )
}

export default Question
