import { WeekdayRu } from '@stud-log/news-types/enums';
import moment from 'moment';
import React from 'react';
import { FC } from 'react';
import { timetable } from '../../http/mock/calendar';
import { SCFullTimeTable } from './timetable.styles';

const todayWeekParity = moment().week() % 2 === 1 ? 'odd' : 'even';
const FullTimeTable: FC = () => {
  return (
    <SCFullTimeTable.Wrapper>
      <SCFullTimeTable.Table className="daytimetable">
        <SCFullTimeTable.TableBody>
          {timetable.map(({ id, weekday, title, start, weekparity, link, classroom }, index) => {
            let startTime = moment(start, 'HH:mm'); //время начала пары
            let endTime = moment(startTime).add({ hours: 1, minutes: 25 }).format('HH:mm'); //время окончания пары
            let nextIndex = (index + 1) % timetable.length;
            let isWrap = true;
            let notThisWeekendClass = weekparity === 'both' ? false : weekparity === todayWeekParity ? false : true;
            if (weekday === timetable[nextIndex].weekday && index !== 0) isWrap = false;
            else isWrap = true;

            if (weekday !== 'Sun') {
              return (
                <React.Fragment key={index}>
                  {isWrap && index === 0 && (
                    <>
                      <SCFullTimeTable.Tr>
                        <SCFullTimeTable.Td colSpan={3} weekday>
                          {WeekdayRu[weekday]}
                        </SCFullTimeTable.Td>
                      </SCFullTimeTable.Tr>
                      <SCFullTimeTable.Tr notThisWeekend={notThisWeekendClass}>
                        <SCFullTimeTable.Td
                          style={{
                            paddingRight: '20px',
                          }}
                        >
                          {start}-{endTime}
                        </SCFullTimeTable.Td>
                        <SCFullTimeTable.Td>{title}</SCFullTimeTable.Td>
                        <SCFullTimeTable.Td classroom>{classroom}</SCFullTimeTable.Td>
                      </SCFullTimeTable.Tr>
                    </>
                  )}
                  {isWrap && index !== 0 && (
                    <>
                      <SCFullTimeTable.Tr notThisWeekend={notThisWeekendClass}>
                        <SCFullTimeTable.Td
                          style={{
                            paddingRight: '20px',
                          }}
                        >
                          {start}-{endTime}
                        </SCFullTimeTable.Td>
                        <SCFullTimeTable.Td>{title}</SCFullTimeTable.Td>
                        <SCFullTimeTable.Td classroom>{classroom}</SCFullTimeTable.Td>
                      </SCFullTimeTable.Tr>
                      {index !== timetable.length - 1 && (
                        <SCFullTimeTable.Tr>
                          <SCFullTimeTable.Td colSpan={2} weekday>
                            {WeekdayRu[timetable[nextIndex].weekday]}
                          </SCFullTimeTable.Td>
                        </SCFullTimeTable.Tr>
                      )}
                    </>
                  )}

                  {!isWrap && index !== 0 && (
                    <>
                      <SCFullTimeTable.Tr notThisWeekend={notThisWeekendClass}>
                        <SCFullTimeTable.Td
                          style={{
                            paddingRight: '20px',
                          }}
                        >
                          {start}-{endTime}
                        </SCFullTimeTable.Td>
                        <SCFullTimeTable.Td>{title}</SCFullTimeTable.Td>
                        <SCFullTimeTable.Td classroom>{classroom}</SCFullTimeTable.Td>
                      </SCFullTimeTable.Tr>
                    </>
                  )}
                </React.Fragment>
              );
            }
          })}
        </SCFullTimeTable.TableBody>
      </SCFullTimeTable.Table>
    </SCFullTimeTable.Wrapper>
  );
};

export default FullTimeTable;
