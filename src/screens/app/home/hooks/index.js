import { useState } from 'react';

export function useHooks() {

    const [modalHomeVisible, setModalHomeVisible] = useState(false);
    const [value, setValue] = useState(null);


    const modalHomeVisibility = () => {
        setModalHomeVisible(!modalHomeVisible);
    };

    const data = [
        { label: 'Large', value: '1' },
        { label: 'Medium', value: '2' },
        { label: 'Small', value: '3' },
      ];


    return { modalHomeVisible, modalHomeVisibility, data ,value ,setValue }
}