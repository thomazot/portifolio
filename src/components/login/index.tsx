'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import z from 'zod'

import { Card } from '@/commons/card'
import { Link } from '@/commons/link'
import { Text } from '@/commons/text'
import { Title } from '@/commons/title'
import { View } from '@/commons/view'
import { Button } from '@/forms/button'
import { FieldCheckbox } from '@/forms/field-checkbox'
import { FieldText } from '@/forms/field-text'

const SContent = styled.section`
  width: 400px;
  max-width: 90%;
  margin: 0 auto;
`
const SForm = styled.form``

const invalid_type_error = 'Ops! Invalid type provided for this field.'
const required_error = 'Ops! This field cannot be blank.'

const LoginSchema = z.object({
  identifier: z
    .string({ invalid_type_error, required_error })
    .min(1, { message: required_error }),
  password: z
    .string({ invalid_type_error, required_error })
    .min(6, { message: 'Ops! Password is too short' }),
  remember: z.optional(z.boolean())
})

export type LoginType = z.infer<typeof LoginSchema>

type LoginProps = {
  onSubmit: (_data: LoginType) => void
  defaultValue?: LoginType
  loading?: boolean
  forgotPassword?: string
}

export const Login = ({
  onSubmit,
  defaultValue,
  loading,
  forgotPassword = '/'
}: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm<LoginType>({
    mode: 'onTouched',
    resolver: zodResolver(LoginSchema),
    defaultValues: defaultValue
  })

  const disabledSubmitButton = !isDirty || !isValid || !loading

  function handleLogin(data: LoginType) {
    onSubmit(data)
  }

  return (
    <SContent>
      <Card>
        <SForm onSubmit={handleSubmit(handleLogin)}>
          <View $display="flex" $flexDirection="column" $gap="16px">
            <Title>Login</Title>
            <FieldText {...register('identifier')} error={errors?.identifier}>
              Username:
            </FieldText>
            <FieldText
              {...register('password')}
              type="password"
              error={errors?.password}
            >
              Password:
            </FieldText>
            <View $display="flex" $justifyContent="space-between">
              <FieldCheckbox {...register('remember')}>
                Remember me
              </FieldCheckbox>
              <Link href={forgotPassword}>
                <Text as="span">Forgot password?</Text>
              </Link>
            </View>
            <View $display="flex">
              <Button
                disabled={disabledSubmitButton}
                type="submit"
                style={{ marginLeft: 'auto' }}
              >
                Login
              </Button>
            </View>
          </View>
        </SForm>
      </Card>
    </SContent>
  )
}
