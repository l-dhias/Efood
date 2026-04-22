import styled from 'styled-components'
import theme from '../../global/theme'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const ModalContent = styled.div`
  background: ${theme.Colors.text};

  padding: 32px;
  position: relative;
  display: flex;
  gap: 20px;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 90%;
    overflow-y: auto;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 90%;
    overflow-y: auto;
    margin: 0 auto;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 100%;
      height: 200px;
    }
  }

  h3 {
    font-size: ${theme.fontSizes.headingM};
    color: ${theme.Colors.white};
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: ${theme.fontSizes.bodyS};
    color: ${theme.Colors.white};
    line-height: 22px;
    padding-bottom: 16px;
  }

  button {
    background: ${theme.Colors.primary};
    color: ${theme.Colors.text};
    border: none;
    padding: 10px 20px;
    cursor: pointer;
  }

  .close {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 16px;
    right: 16px;
    background: transparent;
    font-size: 18px;
    border: none;
    cursor: pointer;

    @media (max-width: ${theme.breakpoints.tablet}) {
      width: 14px;
      height: 14px;
      top: 8px;
      right: 8px;
    }
  }
`
