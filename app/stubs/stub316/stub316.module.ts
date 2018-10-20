import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub316Component} from "./stub316.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub316Component
        }])
    ],
    declarations: [
        Stub316Component
    ]
})
export class Stub316Module {

}
