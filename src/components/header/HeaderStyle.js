import styled from 'styled-components'
import { colors } from 'config'

const { blue, white, green } = colors

export const HeaderSection = styled.header`
  .navbar-brand {
    cursor: pointer;
  }
  .navbar-nav a {
    padding: 0.2rem;
    margin-left: 3rem;
    cursor: pointer;
    color: ${blue};
    white-space: nowrap;
    font-size: 16px;
    @media (max-width: 767px) {
      display: none;
    }
    &.highlighted {
      padding: 0.2rem 1.4rem;
      background: ${green};
      border-radius: 20px;
      color: ${white};
      @media (max-width: 767px) {
        display: block;
        margin: 0;
        padding: 0.2rem 1rem;
      }
    }
    &:hover {
      text-decoration: none;
    }
  }
  @media (max-width: 767px) {
    .navbar {
      padding-left: 0;
      padding-right: 0;
    }
  }
`
