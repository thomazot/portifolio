'use client'

import { useState } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Text } from '@/commons/text'
import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Button } from '@/forms/button'
import { FieldText } from '@/forms/field-text'
import { FieldTextarea } from '@/forms/field-textarea'

import { FormContactType } from '.'

const CONTACT_DATA_DEFAULT: FormContactType = {
  name: '',
  email: '',
  message: ''
}

export const FormContactForm = ({
  formMethods
}: {
  formMethods: UseFormReturn<FormContactType>
}) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState<boolean>()
  const [error, setError] = useState<boolean>()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = formMethods

  async function onSubmit(data: FormContactType) {
    const formData = new FormData()

    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('message', data.message)

    setLoading(true)

    await fetch('/api/contact', {
      method: 'POST',
      body: formData
    })
      .then(() => setSuccess(true))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }

  function handleReset() {
    reset(CONTACT_DATA_DEFAULT)
    setSuccess(undefined)
    setError(undefined)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '100%',
        maxWidth: '370px',
        gap: `20px`,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {success ?? (
        <>
          <FieldText {...register('name')} error={errors?.name}>
            _name:
          </FieldText>
          <FieldText {...register('email')} error={errors?.email}>
            _email:
          </FieldText>
          <FieldTextarea {...register('message')} error={errors?.message}>
            _message
          </FieldTextarea>
          <View>
            <Button loading={loading} style={{ marginTop: '16px' }}>
              submit-message
            </Button>
          </View>
        </>
      )}
      {success === true && (
        <View style={{ textAlign: 'center' }}>
          <Title color="secondary-four" size="subtitle">
            Thank you! 🤘
          </Title>
          <Text as="div">
            Your message has been accepted. You will recieve answer really soon!
          </Text>

          <Button
            onClick={handleReset}
            type="button"
            style={{ marginTop: '16px' }}
          >
            send-new-message
          </Button>
        </View>
      )}
      {error === true && (
        <View style={{ textAlign: 'center' }}>
          <Title color="secondary-four" size="subtitle">
            Sorry!
          </Title>
          <Text as="div">
            There was a problem with shipping. Try again later!
          </Text>

          <Button
            onClick={handleReset}
            type="button"
            style={{ width: '50%', marginTop: '16px' }}
          >
            send-new-message
          </Button>
        </View>
      )}
    </form>
  )
}
