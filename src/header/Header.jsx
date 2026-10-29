import { ActionIcon, Button, useMantineColorScheme } from "@mantine/core";
import { AlignJustify, ChevronDown, Globe, Moon, Search, Sun, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="first-header">
        
        <div className="header-left">
          <div onClick={() => setMenuOpen(true)} className="hamburger-menu">
            <AlignJustify />
          </div>

          <NavLink to="/" className="logo-link">
            <div className="forth-header">
              <span>L</span>
            </div>
            <span className="text-logo">Logo</span>
          </NavLink>

          <nav className="five-header">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>О школе</NavLink>
            <NavLink to="/study" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Обучение</NavLink>
            <NavLink to="/schedule" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Расписание</NavLink>
            <NavLink to="/rules" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Правила</NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Новости</NavLink>
            <NavLink to="/support" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Поддержка</NavLink>
          </nav>
        </div>

        <div className="six-header">
          <button className="search-button" type="button">
            <Search color="var(--header-text)" width='16px' height='16px' />
          </button>
          
          <div className="language-button">
            <Button leftSection={<Globe size={18} />} rightSection={<ChevronDown size={18} />}>
              Русский
            </Button>
          </div>

          <ActionIcon onClick={() => toggleColorScheme()} color={colorScheme === "dark" ? "#0f172a" : "#F0FDF9"}>
            {colorScheme === "dark" ? <Moon /> : <Sun color="#0f172a"/>}
          </ActionIcon>

          <div className="header-button">
            <Button radius="xl">Связаться с нами</Button>
          </div>
        </div>

        {menuOpen && (
          <div className="menu">
            <div onClick={() => setMenuOpen(false)} className="close-menu">
              <X />
            </div>
            <div className="menu-five-header">
              <NavLink onClick={() => setMenuOpen(false)} to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>О школе</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/study" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Обучение</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/schedule" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Расписание</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/rules" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Правила</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/news" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Новости</NavLink>
              <NavLink onClick={() => setMenuOpen(false)} to="/support" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Поддержка</NavLink>
            </div>
            <div className="header-button-1">
              <Button radius="xl">Связаться с нами</Button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};