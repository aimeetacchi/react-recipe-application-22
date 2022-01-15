import styled from 'styled-components';

export const NavStyles = styled.nav`
      height: 15vh;
    .nav-list {
        margin: 0;
        padding: 0;
        list-style: none;

        &__item {
            text-align: center;
            padding: 5px 0;
            font-size: 2.2rem;
        }
    }
  
 /* Desktop */
    @media (min-width: 720px) {
        height: 10vh;
        .nav-list {
            padding: 20px 0;
            display: flex;
            justify-content: center;
        
            &__item {
                padding: 0 10px;
        
                a {
                color: $light;
                text-decoration: none;
        
                &:hover {
                    color: darken($light, 20%);
                }
                }
            }
        }
    }
`;