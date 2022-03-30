import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const WoodSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Woods"),
    description: Joi.string().required().example("Woody"),
    latitude: Joi.number().required().example(50.12345),
    longitude: Joi.number().required().example(-6.54321),
    categoryid: IdSpec,
  })
  .label("Wood");

export const WoodSpecPlus = WoodSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("WoodPlus");

export const WoodArraySpec = Joi.array().items(WoodSpecPlus).label("WoodArray");

export const CategorySpec = Joi.object()
  .keys({
    title: Joi.string().required().example("Broadleaf"),
    userid: IdSpec,
    woods: WoodArraySpec,
  })
  .label("Category");

export const CategorySpecPlus = CategorySpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("CategoryPlus");

export const CategoryArraySpec = Joi.array().items(CategorySpecPlus).label("CategoryArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");
