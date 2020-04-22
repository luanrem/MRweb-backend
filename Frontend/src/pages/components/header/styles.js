import styled from 'styled-components';

export const Container = styled.header`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  flex-direction: row;
  max-width: 1366px;
  background: transparent;

  .search {
    cursor: pointer;
    padding-right: 100px;
  }
`;

export const Titulo = styled.ul`
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 20px;
  }

  li a {
    transition: all 0.3s ease 0s;

  }

  li a:hover {
    color: #0088a9;
  }

  `;

  export const Profile = styled.h1`
    color: #333;
    padding-left: 100px;
  `;
