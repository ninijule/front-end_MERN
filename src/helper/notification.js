import { toast } from 'react-toastify';

export default {
    show: (message, type, position) => {
        toast(message, {
            position: position,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: type
        });
    }
}