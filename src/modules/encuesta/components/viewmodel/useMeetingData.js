import { useGetMeetingById } from '../../hooks/useGetMeetingById';

export const useMeetingData = (idMeeting) => {
  const { data, isLoading, isError } = useGetMeetingById(idMeeting);

  const meeting = data?.data || null;

  return {
    meeting,
    isLoading,
    isError,
  };
};
