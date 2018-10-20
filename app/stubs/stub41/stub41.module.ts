import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub41Component} from "./stub41.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub41Component
        }])
    ],
    declarations: [
        Stub41Component
    ]
})
export class Stub41Module {

}
