import { Router } from 'express'
import { verifyUserJWT } from '../middlewares/userAuth.middleware.js'
import { addReservation, updateReservation, viewReservations } from '../controllers/reservation.controller.js'
import { verifyStationJWT } from '../middlewares/stationAuth.middleware.js'

const reservationRouter = Router()

reservationRouter.route('/reserve-station/:stationId').post(verifyUserJWT, addReservation)
reservationRouter.route('/update-reservation').post(verifyStationJWT, updateReservation)
reservationRouter.route('/view-reservation').post(verifyStationJWT, viewReservations)

export default reservationRouter