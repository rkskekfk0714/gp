package gp.domain;

import gp.web.dto.MemberDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

import java.util.List;


public interface MemberRepository extends JpaRepository<Member, Long> {



    // Containing: 특정 키워드 포함 여부
    // IgnoreCase : 대소문자 구별하지 않음
    public Page<Member> findByUsername(String username, Pageable pageable);
    public Page<Member> findByUsernameContaining(String username, Pageable pageable);
    public Page<Member> findByNameContaining(String name, Pageable pageable);
    public Page<Member> findByDateContaining(String date, Pageable pageable);


    Optional<Member> findByName(String name);


    /*
    @Modifying
    @Query(value = "select count(id) form member where username = :username", nativeQuery = true)
    void idcheck(Long id);


     */
    // 회원 정보 이름순
    @Query(value = "select * from member order by name asc",nativeQuery = true)
    List<Member> memberlist();



    // 회원 수
    @Query(value = "select count(*) from member",nativeQuery = true)
    List<Member> membercount();

    @Modifying
    @Query(value = "update Member m set m.password = :password where m.id = :id", nativeQuery = true)
    void updatePwd(Long id, String password);
}
