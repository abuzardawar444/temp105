import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';
import { MdOutlineLocalHotel } from "react-icons/md";
import { GoContainer } from 'react-icons/go';
import { RiHotelBedFill } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'Albergue'
  | 'Pensiones (Apartment) / Private Accomodation'
  | 'Hotel';
  

export const categories: Category[] = [
  {
    label: 'Albergue',
    icon: MdOutlineLocalHotel,
  },
  {
    label: 'Pensiones (Apartment) / Private Accomodation',
    icon: RiHotelBedFill,
  },
  {
    label: 'Hotel',
    icon: FaHotel,
  },
  ];