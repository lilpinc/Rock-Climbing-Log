import {gql} from '@apollo/client'

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      _id
      username
      password
      email
    }
  }`;

export const DELETE_USER = gql`
mutation removeUser($id: ID!) {
    removeUser(_id: $id) {
      _id
      username
      password
      email
    }
  }`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }`;
 
  export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      success
      message
    }
  }
`;

    export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword) {
      success
      message
    }
    }`;