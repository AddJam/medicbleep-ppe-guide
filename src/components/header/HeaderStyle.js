import styled from 'styled-components'
import { colors } from './../../config/'

const { blue, white, green } = colors

export const HeaderSection = styled.header`
  .navbar-brand {
    cursor: pointer;
  }
  .navbar-nav .nav-link {
    padding: 0.2rem;
    margin-left: 3rem;
    cursor: pointer;
    color: ${blue};
    font-size: 16px;
    &.highlighted {
      padding: 0.2rem 1.4rem;
      background: ${green};
      border-radius: 20px;
      color: ${white};
    }
  }
`
