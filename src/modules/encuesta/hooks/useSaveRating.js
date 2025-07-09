import { useMutation } from '@tanstack/react-query';
import { save } from '../api/rating';

export const useSaveRating = () => {
    return useMutation({
        mutationFn: save,
        onSuccess: (data) => {
            //console.log('✅ Rating guardado con éxito:', data);
        },
        onError: (error) => {
            console.error('🔥 Error al guardar el rating:', error.response?.data || error.message);
        }
    });
};
