import { useGetParticipantByHostId } from "../../hooks/useGetParticipantByHostId";

export const useHostData = (hostId) => {
    const { data, isLoading, isError } = useGetParticipantByHostId(hostId);

    const participant = data?.data || null;

    return {
        participant,
        isLoading,
        isError,
    };
};
