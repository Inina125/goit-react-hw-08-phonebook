import styled from 'styled-components';

const ContactsCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  align-items: center;
`;

const HeadingPage = styled.h1`
  margin-top: 50px;
  margin-bottom: 15px;
`;

const Sections = styled.div`
  display: flex;
  gap: 0 50px;
`;

const SectionCont = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeadingSection = styled.h2`
  margin-top: 25px;
`;

export { ContactsCont, HeadingPage, HeadingSection, Sections, SectionCont };
