// -- basic library --
import RoundedButton from 'components/atoms/RoundedButton';
import React, { useEffect} from 'react';
import styled from 'styled-components';

// -- external components --
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // pluginは、あとから



// -- main component --
const Homes: React.FC = () => {
  // -- get external datas --

  // -- local states --
//   const [channel, setChannel] = useState<Channel | null>(null);

  // -- functions --
//   const handleTabsClick = (tab_id: string, channel_id: string) => {
//     history.push(`/channels/${channel_id}/${tab_id}`);
//   };

  // -- onload function --
  useEffect(() => {

  }, []); /* eslint-disable-line */

  // -- render part --
  return (
    <Wrap>
        <RoundedButton text="sample" />
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" locale="ja"/>
    </Wrap>
  );
};

// -- styled components --
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

// -- finally export part --

export default Homes;
