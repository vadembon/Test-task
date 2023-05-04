import styled from 'styled-components';
import bgImg from '../../images/picture.png';

export const CardBox = styled.div`
  position: relative;
  padding: 28px 0;
  text-align: center;
  width: 380px;
  height: 460px;
  background-image: url(${bgImg});

  background-repeat: no-repeat;
  background-position: 36px 28px;
`;

export const LineAvatar = styled.div`
  position: absolute;
  top: 214px;
  left: 50%;
  transform: translateX(-50%);
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const BgAvatar = styled.div`
  position: absolute;
  top: -36px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const ImgAvatar = styled.img`
  margin: 9px auto;
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const NameTitle = styled.h2`
  margin-top: 284px;

  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const TweetTitle = styled.p`
  margin-top: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const FollowerTitle = styled.p`
  margin-top: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Btn = styled.button`
  margin-top: 26px;

  width: 196px;
  height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  :hover {
    box-shadow: inset 1px 1px 27px 5px #4b2a99;
  }
`;
