import styled from "styled-components";

function Introduction({ locale }) {
  switch (locale) {
    default:
      return (
        <Paragraph>
          Hey there, I'm <Strong>Himanshu Bhoir</Strong>! <br />
          I'm <Strong>graduating</Strong> from MGMCET in <Strong>2024</Strong>, <Strong>Bachelor of Engineering , Computer .</Strong><br />
          Developing software solution for <Strong>GDSC</Strong> MGMCET, as <Strong>Project Head Web</Strong> . <br />
          I specialize in <Strong>Full stack Development</Strong> and I <Strong>love crafting innovative software</Strong> solutions. <br />
          I thrive in <Strong>motivated environments</Strong> and believe in taking <Strong>swift action</Strong> to get things done. <br />
          <Strong>Trust is</Strong> incredibly <Strong>important</Strong> to me. If someone trusts me, it's <Strong>my responsibility to maintain that trust .</Strong> <br />
          I'm <Strong>constantly learning</Strong> because <Strong>technology never stops evolving .</Strong><br />
          In the tech realm, there's magic and growing expectations. It's <Strong>not</Strong> just about <Strong>creating services</Strong>; it's about <Strong>making them engaging for everyone .</Strong> <br />
          <Strong>Let's explore</Strong> the exciting world of <Strong>technology together!</Strong>
        </Paragraph>
      );
  }
}

export default Introduction;

const Paragraph = styled.p`
  display: block;

  line-height: 1.2;
  line-break: auto;

  font-size: 2vw;
  font-family: "Neue Montreal";
  font-weight: 200;
`;

const Strong = styled.strong`
  font-weight: 500;
`;