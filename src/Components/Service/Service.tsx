import styles from './Service.module.scss'
import { useTranslation } from 'react-i18next';  // Добавляем useTranslation для перевода
import { useService, ISevice } from "./hook/useService";
import i18n from '../../i18n';  // Импорт i18n для получения текущего языка

const Service = () => {
    // Вызов useService должен находиться внутри компонента
    const { data: service } = useService();
    const { i18n } = useTranslation();  // Подключаем хук useTranslation

    // Функция для отображения заголовка в зависимости от текущего языка
    const renderTitle = (serviceItem: ISevice) => {
        switch (i18n.language) {
            case 'ru':
                return serviceItem.title_ru;
            case 'uz':
                return serviceItem.title_uz;
            case 'en':
            default:
                return serviceItem.title_en;
        }
    };

    // Функция для отображения описания услуги в зависимости от текущего языка
    const renderDescription = (serviceItem: ISevice) => {
        switch (i18n.language) {
            case 'ru':
                return serviceItem.description_ru;
            case 'uz':
                return serviceItem.description_uz;
            case 'en':
            default:
                return serviceItem.description_en;
        }
    };

    return (
        <div id='Service'>
            <div className={styles.service}>
                <h1>{i18n.t('services')}</h1>  {/* Перевод заголовка "Услуги" */}
                <div className={styles.container}>
                    {service?.map((serviceItem) => (
                        <div key={serviceItem.id} className={styles.card}>
                            <img className={styles.img} src={serviceItem.img} alt="" />
                            <div className={styles.text}>
                                <h1>{renderTitle(serviceItem)}</h1>  {/* Отображение заголовка услуги */}
                                <p>{renderDescription(serviceItem)}</p>  {/* Отображение описания услуги */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
