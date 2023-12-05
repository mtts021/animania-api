import Joi from 'joi';

const filtersReleaseSchema = Joi.object({
    season: Joi.string().optional(),
    weekly_day: Joi.string().optional()
});

export {filtersReleaseSchema};