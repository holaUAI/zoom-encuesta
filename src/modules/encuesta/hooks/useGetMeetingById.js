import { useQuery } from '@tanstack/react-query';
import { getByMeetingId } from '../api/meeting';

export const useGetMeetingById = (id) => {
    return useQuery({
        queryKey: ['meeting', id],
        queryFn: () => getByMeetingId(id),
        enabled: !!id, // Solo ejecuta si el id existe
    });
};
