const { body, validationResult } = require('express-validator');

const validateEmpleados = [
  body('nombre_empleado').notEmpty().withMessage('Name is required'),
  body('primer_apellido').notEmpty().withMessage('Invalid email format'),
  body('segundo_apellido').notEmpty().withMessage('apellido es requerido'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateEmpleados };
