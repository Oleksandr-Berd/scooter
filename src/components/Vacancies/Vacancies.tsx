import * as SC from './VacanciesStyles'

import { vacancies } from "../../db/db";
import ButtonLink from "../../ui/BtnLink/BtnLink";

const Vacancies = () => {
    return ( <SC.VacanciesSection>
        <ul>
            {vacancies.map(({id, vacancy, address})=> <SC.Item key={id}>
                <SC.ContentWrapper>
                <h3>{vacancy}</h3>
                <p>{address}</p>
                </SC.ContentWrapper>
                <ButtonLink path="#" content="Apply"/>
            </SC.Item>)}
        </ul>
    </SC.VacanciesSection> );
}
 
export default Vacancies;