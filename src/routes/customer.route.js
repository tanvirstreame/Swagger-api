const router = require("express").Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Tanvir Islam Streame
 */

/**
 *  @swagger
 *  /customer/customers:
 *      get:
 *          description: Get all customers
 *          responses:
 *              200:
 *                  description: Success
 *        
 */

router.get("/customers", (req, res) => {
    return res.json({
        data: [
            {
                id: "d5fE_asz",
                title: "The New Turing Omnibus",
                author: "Tanvir Islam Streame"
            }
        ],
        success: true
    })
})

/**
 * @swagger
 * /customer/customer:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customers]
 *     requestBody:
 *       title: title
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       500:
 *         description: Some server error
 */

router.post("/customer", (req, res) => {
    return res.json({
        data: req.body,
        success: true
    })
})

module.exports = router;
