import banjoSound from './Note-Block-Sounds/Banjo/Banjo - Made with Clipchamp.mp3';
import bassSound from './Note-Block-Sounds/Bass/Bass.mp3';
import bassDrumSound from './Note-Block-Sounds/Bass Drum/Bass Drum.mp3';
import bellSound from './Note-Block-Sounds/Bells/Bells.mp3';
import bitSound from './Note-Block-Sounds/Bit/Bit.mp3';
import chimeSound from './Note-Block-Sounds/Chimes/Chimes.mp3';
import cowBellSound from './Note-Block-Sounds/Cow Bell/CowBell.mp3';
import didgeridooSound from './Note-Block-Sounds/Didgeridoo/Didgeridoo.mp3';
import ePianoSound from './Note-Block-Sounds/Electric Piano/Electric Piano.mp3';
import fluteSound from './Note-Block-Sounds/Flute/Flute.mp3';
import guitarSound from './Note-Block-Sounds/Guitar/Guitar.mp3';
import hatSound from './Note-Block-Sounds/Hihat/HiHat.mp3';
import ironXylophoneSound from './Note-Block-Sounds/Iron Xylophone/IXylo.mp3';
import snareSound from './Note-Block-Sounds/Snare Drum/Snare Drum.mp3';
import xylophoneSound from './Note-Block-Sounds/Xylophone/Xylo.mp3';

export let banjo         = new Audio(banjoSound);
export let bass          = new Audio(bassSound);
export let bassDrum      = new Audio(bassDrumSound);
export let bell          = new Audio(bellSound);
export let bit           = new Audio(bitSound);
export let chime         = new Audio(chimeSound);
export let cowBell       = new Audio(cowBellSound);
export let didgeridoo    = new Audio(didgeridooSound);
export let ePiano        = new Audio(ePianoSound);
export let flute         = new Audio(fluteSound);
export let guitar        = new Audio(guitarSound);
export let hat           = new Audio(hatSound);
export let ironXylophone = new Audio(ironXylophoneSound);
export let snare         = new Audio(snareSound);
export let xylophone     = new Audio(xylophoneSound);    

export const newSoundNames = [
    "Bass (String Bass)",
    "Bass Drum (Kick)",
    "Bells (Glockenspiel)",
    "\"Bit\" (Square wave)",
    "Chimes",
    "Cow Bell",
    "Didgeridoo",
    "\"Pling\" (Electric piano)",
    "Flute",
    "Guitar",
    "Clicks and Sticks (Hihat)",
    "Iron Xylophone (Vibraphone)",
    "Snare Drum",
    "Xylophone",
    "Banjo"
];

export const soundMaterials = [
    "Wood",
    "Stone, Blackstone, Netherrack, Nylium, Obsidian, Quartz, Sandstone, Ores, Bricks, Corals, Respawn Anchor, Bedrock, Concrete, Observer",
    "Block of Gold",
    "Block of Emerald",
    "Packed Ice",
    "Soul Sand",
    "Pumpkin",
    "Glowstone",
    "Clay, Honeycomb Block, Infested Block",
    "Wool",
    "Glass, Sea Lantern, Beacon",
    "Block of Iron",
    "Sand, Gravel, Concrete Powder",
    "Bone Block",
    "Hay Bale"
];
