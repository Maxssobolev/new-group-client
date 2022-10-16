import { Drawer } from '@mui/material';
import { FC, useState } from 'react';
import { SCHeadman } from '../../LkUser.styles';
import { ReactComponent as ListIcon } from '../../../../../assets/img/note.svg';
import { SCOffset } from '../../../../Common/UI/offset';
import useUserService from '../../../../../services/user.service';
import ApprovedTable from './ApprovedTable/ApprovedTable';
import InReviewTable from './InReviewTable/InReviewTable';
import useSWR, { SWRResponse } from 'swr';
import { Post } from '@stud-log/news-types/models';
import { $authPost } from '../../../../../http/helpers/authPost';

const GroupmatesTool: FC = () => {
  const { user } = useUserService();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const approvedSWR: SWRResponse<Post[]> = useSWR(`/api/user/get-approved-groupmates`, url => $authPost(url, { group: user?.group }));

  const inReviewSWR: SWRResponse<Post[]> = useSWR(`/api/user/get-inReview-groupmates`, url => $authPost(url, { group: user?.group }));

  return (
    <>
      <SCHeadman.Tool.Btn withText onClick={openModal}>
        <ListIcon /> <span>список студентов</span>
      </SCHeadman.Tool.Btn>
      <Drawer anchor="right" open={isOpen} onClose={closeModal}>
        <SCOffset.Wrapper>
          <ApprovedTable approvedSWR={approvedSWR} />
          <InReviewTable approvedSWR={approvedSWR} inReviewSWR={inReviewSWR} />
        </SCOffset.Wrapper>
      </Drawer>
    </>
  );
};

export default GroupmatesTool;
