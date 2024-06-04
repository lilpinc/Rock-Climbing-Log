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
mutation removeUser($username: String!) {
    removeUser(username: $username) {
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
      }
    }
  }`;