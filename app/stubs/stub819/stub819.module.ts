import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub819Component} from "./stub819.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub819Component
        }])
    ],
    declarations: [
        Stub819Component
    ]
})
export class Stub819Module {

}
