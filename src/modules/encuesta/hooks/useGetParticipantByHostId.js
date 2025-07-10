import { useQuery } from '@tanstack/react-query';
import getByHostId from '../api/participant';

export const useGetParticipantByHostId = (hostId) => {
    return useQuery({
        queryKey: ['participant', hostId],
        queryFn: () => getByHostId(hostId),
        enabled: !!hostId, // solo se ejecuta si hostId está definido
    });
};
