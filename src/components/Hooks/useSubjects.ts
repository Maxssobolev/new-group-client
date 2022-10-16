import { Subject } from '@stud-log/news-types/models';
import { useState, useEffect } from 'react';
import { $host } from '../../http/host';

function useSubjects({ subjectsOnly = false }) {
  const [subjects, setSubjects] = useState<{ id: number; value: string; label: string; fullName?: string }[]>([]);
  useEffect(() => {
    $host.get<Subject[]>('/api/subjects').then(r => {
      let preparedData = [];

      if (!subjectsOnly) {
        preparedData.push({ id: -1, label: 'Все предметы', fullName: '', value: 'all' });
      }
      r.data.forEach(subject => {
        if (subject.title === 'default') return;

        preparedData.push({
          id: subject.id,
          value: subject.title,
          label: subject.title,
          fullName: subject.fullName,
        });
      });
      setSubjects(preparedData);
    });
  }, []);

  return subjects;
}

export default useSubjects;
