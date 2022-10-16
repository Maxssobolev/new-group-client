import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/Common/Layout/Layout';
import { Header, SubHeader } from '../components/Common/UI/headers';
import { SCInvitePage } from '../components/Invite/Invite.styles';
import InviteForm from '../components/Invite/InviteForm/InviteForm';
import { $host } from '../http/host';

const PageInvite: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [serverError, setServerError] = useState('');
  const [params] = useSearchParams();
  const group = params.get('group');
  const hash = params.get('hash');
  const hashId = params.get('hashId');

  useEffect(() => {
    if (!group || !hash || !hashId) {
      setServerError('Недействительная ссылка');
      setIsLoading(false);
    } else {
      $host
        .post('/api/user/checkHash', { group, hash, hashId })
        .catch(err => {
          setServerError(err.response.data.message);
        })
        .finally(() => setIsLoading(false));
    }
  }, [group, hash, hashId]);

  if (isLoading)
    return (
      <Layout.PageContent>
        <SCInvitePage.Block> Загрузка...</SCInvitePage.Block>
      </Layout.PageContent>
    );
  return (
    <Layout.PageContent>
      <SCInvitePage.Block>
        {serverError ? (
          serverError
        ) : (
          <>
            <Header size="l" bold>
              Регистрация <SubHeader size="s">Номер группы {group}</SubHeader>
            </Header>
            <InviteForm group={group!} hash={hash!} hashId={Number(hashId!)} />
          </>
        )}
      </SCInvitePage.Block>
    </Layout.PageContent>
  );
};
export default PageInvite;
