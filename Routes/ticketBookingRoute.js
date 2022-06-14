const express = require("express");
const auth = require('../middleware/auth');
const ticketBooking = require('../controllers/ticketBooking');
const router = express.Router();

router.post('/booking/bookinTicket', auth, ticketBooking.bookingTicket);
router.patch('/booking/bookinTicket/:id', ticketBooking.bookingTicketEdit);
router.get('/booking/bookinTicket/getAll', auth, ticketBooking.bookingTicketGetAll);
router.delete('/booking/bookinTicket/delete/:id', auth, ticketBooking.bookingTicketDelete);
router.post('/booking/bookinTicket/pay', ticketBooking.bookingTicketPay);
router.get('/booking/bookinTicket/pay/getAll', auth, ticketBooking.bookingTicketPayGetAll);

module.exports = router;