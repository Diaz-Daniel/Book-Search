import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(bookData: BookInput!) {
    saveBook(bookData: BookInput!) {
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: ID!) {
    removebook(bookId: ID!) {
      savedBooks
    }
  }
`;
