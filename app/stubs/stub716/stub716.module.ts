import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub716Component} from "./stub716.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub716Component
        }])
    ],
    declarations: [
        Stub716Component
    ]
})
export class Stub716Module {

}
