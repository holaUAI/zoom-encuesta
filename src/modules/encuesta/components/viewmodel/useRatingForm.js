import { useState } from 'react';
import { useSaveRating } from '../../hooks/useSaveRating';

export const useRatingForm = ({ idMeeting, idHost }) => {
    const [rating, setRating] = useState(0);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const { mutate, isLoading, isSuccess } = useSaveRating();

    const handleSubmit = () => {
        if (!idMeeting || !idHost || rating === 0) return;

        mutate(
            {
                meeting_id: idMeeting,
                host_id: idHost,
                score: rating,
            },
            {
                onSuccess: () => setHasSubmitted(true),
            }
        );
    };

    return {
        rating,
        setRating,
        handleSubmit,
        isLoading,
        isSuccess,
        hasSubmitted,
    };
};
