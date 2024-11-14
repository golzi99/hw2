import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                color: 'rgba(1, 203, 34, 1)',
                '& .MuiSlider-thumb': {
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(1, 203, 34, 1)',

                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: 6,             // Размер точки
                        height: 6,            // Размер точки
                        borderRadius: '50%',
                        backgroundColor: 'rgba(1, 203, 34, 1)', // Цвет точки
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Центрируем точку
                    }
                },
                '& .MuiSlider-rail': {
                    color: 'rgba(139, 139, 139, 1)',
                    height: 4,
                }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
