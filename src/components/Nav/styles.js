import styled from 'styled-components';

export const NavStyles = styled.nav`
      /* height: 15vh; */
    .nav-list {
        margin: 0;
        padding: 0;
        list-style: none;
        max-width: 1024px;
        margin: 0 auto;

        &__item {
            text-align: center;
            padding: 5px 0;
            font-size: 2.2rem;

            a, span {
                    color: black;
                    cursor: pointer;
                    text-decoration: none;
                    &:hover {
                        color: #692a00;
                    }
                }
            &--sign {
                margin: auto;
                width: 90%;
                

                a, span {
                    background-color: #396EB0;
                    border-radius: 10px;
                    display: block;
                    padding: 5px 20px;
                    color: white;
                    transition: all .2s ease-in-out;
                  
                    &:hover {
                        background-color: #397FC0;
                        color: #f1f1f1;
                    }
                }
            }
        }
    }

    .signout {
        cursor: pointer;
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
            
                    &--sign {
                        margin-right: 0;
                        margin-left: auto;
                        width: 200px;
                    }
                
                }
            }
        }
`;